import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Feed from "./components/Feed";



export default function Home() {
  return (
    <main>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Feed />
    </main>
  )
}
