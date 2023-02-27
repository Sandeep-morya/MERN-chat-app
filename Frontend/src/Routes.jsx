import { Routes, Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/chats" element={<ChatPage />} />
		</Routes>
	);
};

export default AllRoutes;
