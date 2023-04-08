import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import { Cryptocurrencies, News } from "../Components";
import { WalletOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading....";
  return (
    <div>
      <div className="top-header">
        <div className="">
          <Title level={3} className="heading">
            Global Crypto Stats
          </Title>
        </div>
        <div>
          <Link className="connect-btn" to="/support">
            <div className="btn-text">
              <p>Connect</p>
            </div>
            <div>
              <WalletOutlined style={{ color: "#ffffff" }} />
            </div>
          </Link>
        </div>
      </div>

      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="support-banner">
        <div className="support-info">
          <h1 className="support-text-header">We Provide 24/7 support, Contact Us we are here to help! </h1>
          <p>Easily accessible support, online business environment. eUKhost’s experienced team of cryptocurrency experts is available 24 hours a day, 7 days a week, ensuring you have uninterrupted service and support. So, no matter what day or time you need to contact us, help is just a click away.</p>
          <p></p>
          <div>
          <Link className="connect-btn" to="/support">
            <div className="btn-text">
              <p>Get Started</p>
            </div>
            <div>
              <ArrowRightOutlined style={{ color: "#ffffff" }} />
            </div>
          </Link>
        </div>
        </div>
        <div className="support-image-container">
          <img
            className="support-photo"
            src={require("../images/supportHero.jpg")}
            alt={"support"}
          />
        </div>
      </div>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          World top Cryptocurrencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>

      <News simplified />
    </div>
  );
};

export default HomePage;
