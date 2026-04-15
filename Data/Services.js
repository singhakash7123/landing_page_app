import { FaTasks } from "react-icons/fa";
import { LuCalendarSearch } from "react-icons/lu";
import { BsSliders } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { MdAddTask } from "react-icons/md";
const Services = [
  {
    id: 1,
    icon: <FaTasks className="bg-[#c3aeff] w-15 h-15 text-5xl rounded-full p-2" />,
    heading: "Easy Task Creation",
    paragraph:
      "Add new tasks quickly with a simple and user-friendly interface. Organize your workload without the hassle.",
  },
  {
    id: 2,
    icon: <LuCalendarSearch className="bg-[#6df2a2] w-15 h-15 text-5xl rounded-full p-2" />,
    heading: "Due Date & Reminders",
    paragraph: "Set due dates and reminders to ensure you meet your deadlines. Get notified via email or in-app alerts.",
  },
  {
    id: 3,
    icon: <BsSliders className="bg-[#6df2d0] w-15 h-15 text-5xl rounded-full p-2" />,
    heading: "Customizable Lists",
    paragraph: "Customize task lists to match your unique workflow. Group tasks by project, priority, or deadline to stay on top of everything.",
  },
  {
    id: 4,
    icon: <GiProgression className="bg-[#6de8f2] w-15 h-15 text-5xl rounded-full p-2" />,
    heading: "Progress Tracking",
    paragraph: "Visualize your progress with intuitive dashboards and progress bars. Keep track of completed and pending tasks effortlessly.",
  },
  {
    id: 5,
    icon: <MdAddTask className="bg-[#9bf26d] w-15 h-15 text-5xl rounded-full p-2" />,
    heading: "Cross Platform Sync",
    paragraph: "Access your tasks from any device. Our application syncs across web, mobile, and desktop to keep you connected.",
  },
];
export default Services;
