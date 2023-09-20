import { useLink } from "@refinedev/core";
import { theme } from "antd";
import { Logo } from "./styled";

const { useToken } = theme;

type TitleProps = {
  collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { token } = useToken();
  const Link = useLink();

  return (
    <Logo>
      <Link to="/">
        {collapsed ? (
          <div></div>
        ) : (
          <div style={{display:"flex" , gap:"4px", alignItems:'center'}}>
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  backgroundSize: "cover",
                }}
                src={"../../../public/images/logo.png"}
              />
              <h2 style={{fontSize:'1.6rem', fontWeight:'800',textAlign:"center", color: "red",paddingTop:'6px'}} >NCC</h2>
          </div>
        )}
      </Link>
    </Logo>
  );
};
