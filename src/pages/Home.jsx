import Logo from "../components/Logo";
import SideBar from "../components/SideBar";
import Layout from "../layouts/Layout";
import {
  NotificationsOutlined,
  ChatBubbleOutline,
  ArrowDropDownSharp,
} from "@mui/icons-material";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-screen">
        <section className="w-full h-screen flex flex-col">
          <nav className="py-3 px-4 flex justify-between items-center border-b-2 border-slate-200">
            <span className="cursor-pointer flex justify-start w-1/2">
              <Logo />
            </span>
            <span className="gap-x-5 flex justify-end w-1/2">
              <span className="cursor-pointer">
                <NotificationsOutlined fontSize="large" />
              </span>
              <span className="cursor-pointer">
                <ChatBubbleOutline fontSize="large" />
              </span>
              <span className="flex items-center justify-end cursor-pointer min-w-16 w-1/6">
                <img
                  src=""
                  alt=""
                  className="bg-slate-300 size-9 rounded-full"
                />
                <ArrowDropDownSharp />
              </span>
            </span>
          </nav>
        </section>
      </div>
    </Layout>
  );
}
