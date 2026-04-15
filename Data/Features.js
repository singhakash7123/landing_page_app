import { HiOutlineChatAlt2 } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi2";
import { RiGalleryFill } from "react-icons/ri";
import { FiType } from "react-icons/fi";
import { MdImageSearch } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
 const features =
[
    {
        id:1,
        heading:"Real Time Messaging",
        paragraph:"Instant communication with no noticeable delay, ensuring smooth conversations.",
        icon:<HiOutlineChatAlt2 />,
        color:"#936dff"
    },
    {
        id:2,
        heading:"Group Chat",
        paragraph:"Create and participate in group conversations for team collaboration or social interactions.",
        icon:<HiUserGroup />,
        color:"#c3aeff"
    },
    {
        id:3,
        heading:"Multimedia Sharing",
        paragraph:"Send and receive images, videos, audio files, and documents within the chat.",
        icon:<RiGalleryFill />,
        color:"#6df2a2"
    },
    {
        id:4,
        heading:"Typing Indicators",
        paragraph:"See when the other person is typing, making the conversation feel more interactive.",
        icon:<FiType />,
        color:"#6df2d0"
    },
    {
        id:5,
        heading:"Search Functionality",
        paragraph:"Easily find specific messages or conversations using keywords or filters.",
        icon:<MdImageSearch />,
        color:"#6de8f2"
    },
    {
        id:6,
        heading:"Voice and Video Calls",
        paragraph:"Make voice and video calls directly from the chat application, facilitating face‑to‑face.",
        icon:<FaHeadset />,
        color:"#9bf26d"
    }
]

export default features