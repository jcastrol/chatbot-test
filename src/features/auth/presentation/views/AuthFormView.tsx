type Props = {
  email: string;
  password: string;
  error: string;
  onEmailChange: (val: string) => void;
  onPasswordChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function AuthFormView({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <p className="text-sm text-gray-500 text-center">
        Welcome back! Please enter your details.
      </p>
      <div>
        <label className="block text-sm font-medium mb-1">Email Address*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="ex. email@domain.com"
          className="w-full bg-gray-100 p-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#635BFF]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password*</label>
        <div className="relative">
          <input
            type={"password"}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-gray-100 p-3 rounded-md text-sm pr-10 outline-none focus:ring-2 focus:ring-[#635BFF]"
            required
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <p className="text-xs text-gray-500 leading-snug">
        By registering for an account, you are consenting to our{" "}
        <a href="#" className="text-[#635BFF] underline">
          Terms of Service
        </a>{" "}
        and confirming that you have reviewed and accepted the{" "}
        <a href="#" className="text-[#635BFF] underline">
          Global Privacy Statement
        </a>
        .
      </p>

      <button
        type="submit"
        className="w-full bg-[#635BFF] text-white py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
      >
        Get started free
      </button>

      <p className="text-sm text-center">
        Already have an account?{" "}
        <a href="/login" className="text-[#635BFF] underline font-medium">
          Sign in
        </a>
      </p>
    </form>
  );
}
