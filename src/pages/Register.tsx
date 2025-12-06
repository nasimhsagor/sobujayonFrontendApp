import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { register as apiRegister } from "@/lib/api";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (values: { name: string; email: string; password: string }) => apiRegister(values),
    onSuccess: () => {
      toast({ title: "Account created", description: "You can now sign in." })
      navigate("/login")
    },
    onError: (error: any) => {
      const message = error?.payload?.message || error?.message || "Registration failed"
      toast({ title: "Registration failed", description: String(message) })
    },
  })

  const onSubmit = (values: FormValues) => {
    const { name, email, password } = values
    mutation.mutate({ name, email, password })
  }

  const password = watch("password");
  const isSubmitting = mutation.isPending

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Create account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Your name</Label>
            <Input
              {...register("name", { required: "Name is required" })}
              placeholder="Full name"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
            )}
          </div>

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
              placeholder="Choose a password"
            />
            {errors.password && (
              <p className="text-sm text-destructive mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Label>Confirm password</Label>
            <Input
              {...register("confirmPassword", {
                required: "Please confirm password",
                validate: (v) => v === password || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>
          </div>
        </form>

        <p className="text-sm text-muted-foreground mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-primary underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
