import { StyledTabs } from "@/components/Common";
import { Tabs } from "antd";
import EventsList from "./EventsList";
import NewsList from "./NewsList";
const { TabPane } = Tabs;

const NewsEvents = () => {
	return (
		<StyledTabs defaultActiveKey="news">
			<TabPane tab="News" key="news">
				<NewsList />
			</TabPane>
			<TabPane tab="Events" key="events">
				<EventsList />
			</TabPane>
		</StyledTabs>
	);
};

export default NewsEvents;
