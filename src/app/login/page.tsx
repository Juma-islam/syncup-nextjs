export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="card w-96 bg-base-100 shadow-2xl backdrop-blur-md bg-opacity-90 border border-white/20">
        <div className="card-body items-center text-center">
          <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
            S
          </div>
          <h2 className="card-title text-3xl font-extrabold text-slate-800">Welcome Back!</h2>
          <p className="text-slate-500 mb-6 font-medium">SyncUp: Your Personal Task Hub</p>
          
          <div className="form-control w-full gap-4">
             {/* Google Login Button */}
            <button className="btn btn-outline gap-3 hover:bg-slate-100 transition-all border-2">
              <img src="https://authjs.dev/img/providers/google.svg" width="20" alt="Google" />
              Continue with Google
            </button>

            {/* GitHub Login Button */}
            <button className="btn btn-neutral gap-3 shadow-lg">
              <img src="https://authjs.dev/img/providers/github.svg" width="20" className="invert" alt="GitHub" />
              Continue with GitHub
            </button>
          </div>
          
          <div className="mt-8 text-xs text-slate-400">
            By signing in, you agree to our Terms of Service.
          </div>
        </div>
      </div>
    </div>
  );
}