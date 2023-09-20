import { Row, Col, Card, Typography } from "antd";
import { useTranslation } from "react-i18next";

import {
    DailyKeyword,
    NewCustomers,
    CategoryRevenue,
} from "../../components";

const { Text } = Typography;

export const DashboardPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Row gutter={[16, 16]}>
            <Col md={24}>
                <Row gutter={[16, 16]}>
                    <Col xl={10} lg={24} md={24} sm={24} xs={24}>
                        <Card
                            bodyStyle={{
                                padding: 10,
                                paddingBottom: 0,
                            }}
                            style={{
                                background: "url(images/daily-category.png)",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right",
                                backgroundSize: "cover",
                            }}
                        >
                            <CategoryRevenue />
                        </Card>
                    </Col>
                    <Col xl={7} lg={12} md={24} sm={24} xs={24}>
                        <Card
                            bodyStyle={{
                                padding: 10,
                                paddingBottom: 0,
                            }}
                            style={{
                                background: "url(images/daily-category.png)",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right",
                                backgroundSize: "cover",
                            }}
                        >
                            <DailyKeyword />
                        </Card>
                    </Col>
                    <Col xl={7} lg={12} md={24} sm={24} xs={24}>
                        <Card
                            bodyStyle={{
                                padding: 10,
                                paddingBottom: 0,
                            }}
                            style={{
                                background: "url(images/daily-category.png)",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right",
                                backgroundSize: "cover",
                            }}
                        >
                            <NewCustomers />
                        </Card>
                    </Col>
                </Row>
            </Col>

        </Row>
    );
};
