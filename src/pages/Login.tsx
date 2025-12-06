import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "@/lib/api";
import { setToken } from "@/lib/auth";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (values: FormValues) => apiLogin(values),
    onSuccess(data) {
      const token = (data as any)?.token
      if (token) {
        setToken(token)
      }
      toast({ title: "Signed in", description: "Welcome back!" })
      navigate("/")
    },
    onError(error: any) {
      const message = error?.payload?.message || error?.message || "Sign in failed"
      toast({ title: "Sign in failed", description: String(message) })
    },
  })

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values)
  }

  const isSubmitting = mutation.isPending

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Enter a valid email",
                },
              })}
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label>Password</Label>
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              type="password"
              placeholder="Your password"
            />
            {errors.password && (
              <p className="text-sm text-destructive mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>

        <p className="text-sm text-muted-foreground mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
