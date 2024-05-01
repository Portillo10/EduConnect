import GoogleLogo from "../assets/google_logo.svg";

export default function GoogleButton() {
  return (
    <button className="button bg-slate-300 hover:bg-slate-400 text-black">
      <img className="size-5" src={GoogleLogo} alt="" />{" "}
      <p>Continuar con Google</p>
    </button>
  );
}
