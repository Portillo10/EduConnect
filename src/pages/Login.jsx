import GoogleButton from "../components/GoogleButton";
import Logo from "../assets/logo.svg";
import { useAuthStore } from "../store/Auth.ts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuthStore();
  const navigate = useNavigate()

  const submit = handleSubmit((data) => {
    signIn(data);
    navigate("/");
  });

  return (
    <Layout>
      <h1 className="w-full flex items-center py-3 px-8 gap-x-4 border-b-2 border-gray-200">
        <img src={Logo} alt="" />{" "}
        <p className="font-bold text-xl">EduConnect</p>
      </h1>
      <main className="w-full h-full flex flex-col items-center py-5 gap-y-3 max-w-lg px-6">
        <h2 className="font-bold text-2xl">Bienvenido</h2>
        <form className="flex flex-col gap-y-4 w-full" onSubmit={submit}>
          <span className="flex flex-col gap-y-2">
            <label htmlFor="" className="font-bold">
              Correo
            </label>
            <input
              className="input"
              {...register("email", { required: true })}
              placeholder="correo electrónico"
              type="email"
            />
          </span>
          <span className="flex flex-col gap-y-2">
            <label htmlFor="" className="font-bold">
              Contraseña
            </label>
            <input
              className="input"
              {...register("password", { required: true })}
              placeholder="contraseña"
              type="password"
            />
          </span>
          <a
            href=""
            className="text-slate-600 font-semibold hover:text-slate-800 transition-all"
          >
            ¿Olvidaste tu contraseña?
          </a>
          <button className="button">Iniciar Sesion</button>
        </form>
        <GoogleButton />
        <p className="text-slate-600 font-semibold">
          ¿Aún no tienes una cuenta?
        </p>
        <button className="button bg-red-700 hover:bg-red-900">
          Regístrate
        </button>
      </main>
    </Layout>
  );
}
