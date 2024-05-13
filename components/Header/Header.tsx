import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Container>
      <MaxWidth>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
          }}
        >
          <Logo
            onClick={() => {
              router.push("/");
            }}
          >
            <svg
              width="128"
              height="24"
              viewBox="0 0 128 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.826 4.6H39.822C41.494 4.6 42.968 4.92267 44.244 5.568C45.5347 6.19867 46.532 7.09333 47.236 8.252C47.9547 9.41067 48.314 10.76 48.314 12.3C48.314 13.84 47.9547 15.1893 47.236 16.348C46.532 17.5067 45.5347 18.4087 44.244 19.054C42.968 19.6847 41.494 20 39.822 20H32.826V4.6ZM39.646 17.074C41.186 17.074 42.4107 16.6487 43.32 15.798C44.244 14.9327 44.706 13.7667 44.706 12.3C44.706 10.8333 44.244 9.67467 43.32 8.824C42.4107 7.95867 41.186 7.526 39.646 7.526H36.39V17.074H39.646ZM62.9258 17.14V20H51.0018V4.6H62.6398V7.46H54.5438V10.804H61.6938V13.576H54.5438V17.14H62.9258ZM80.3527 4.6L73.6867 20H70.1667L63.5227 4.6H67.3727L72.0587 15.6L76.8107 4.6H80.3527ZM88.9031 20.264C87.3045 20.264 85.8598 19.9193 84.5691 19.23C83.2931 18.5407 82.2885 17.5947 81.5551 16.392C80.8365 15.1747 80.4771 13.8107 80.4771 12.3C80.4771 10.7893 80.8365 9.43267 81.5551 8.23C82.2885 7.01267 83.2931 6.05933 84.5691 5.37C85.8598 4.68067 87.3045 4.336 88.9031 4.336C90.5018 4.336 91.9391 4.68067 93.2151 5.37C94.4911 6.05933 95.4958 7.01267 96.2291 8.23C96.9625 9.43267 97.3291 10.7893 97.3291 12.3C97.3291 13.8107 96.9625 15.1747 96.2291 16.392C95.4958 17.5947 94.4911 18.5407 93.2151 19.23C91.9391 19.9193 90.5018 20.264 88.9031 20.264ZM88.9031 17.228C89.8125 17.228 90.6338 17.0227 91.3671 16.612C92.1005 16.1867 92.6725 15.6 93.0831 14.852C93.5085 14.104 93.7211 13.2533 93.7211 12.3C93.7211 11.3467 93.5085 10.496 93.0831 9.748C92.6725 9 92.1005 8.42067 91.3671 8.01C90.6338 7.58467 89.8125 7.372 88.9031 7.372C87.9938 7.372 87.1725 7.58467 86.4391 8.01C85.7058 8.42067 85.1265 9 84.7011 9.748C84.2905 10.496 84.0851 11.3467 84.0851 12.3C84.0851 13.2533 84.2905 14.104 84.7011 14.852C85.1265 15.6 85.7058 16.1867 86.4391 16.612C87.1725 17.0227 87.9938 17.228 88.9031 17.228ZM109.935 16.7H102.785L101.421 20H97.7688L104.633 4.6H108.153L115.039 20H111.299L109.935 16.7ZM108.813 13.994L106.371 8.098L103.929 13.994H108.813ZM119.053 7.504H114.125V4.6H127.545V7.504H122.617V20H119.053V7.504Z"
                fill="black"
              />
              <path
                d="M24.4218 0H20.533L13.0032 24H16.9111L24.4218 0Z"
                fill="#FC3E2B"
              />
              <path
                d="M0.421814 0H5.60582L13.0032 24H7.93254L0.421814 0Z"
                fill="#001EFE"
              />
              <path
                d="M20.533 0H15.3914L7.93571 24H13.0223L20.533 0Z"
                fill="#001EFE"
              />
            </svg>
          </Logo>
          <Nav>
            <NavItem
              selected={pathName.startsWith("/reels")}
              onClick={() => {
                router.push("/reels");
              }}
            >
              릴스
            </NavItem>
          </Nav>
        </div>
        <Login
          onClick={() => {
            router.push("/auth/login");
          }}
        >
          로그인
        </Login>
      </MaxWidth>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 30px;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 1000;
  margin: 0 auto;
`;

const MaxWidth = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
`;

const NavItem = styled.div<{
  selected?: boolean;
}>`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.selected ? "black" : "#828282")};
  transition: color 0.2s ease-in-out;
  position: relative;

  &:hover {
    color: black;
  }

  ${(props) =>
    props.selected &&
    `
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-color: #FC3E2B;
      position: absolute;
      top: 0;
      right: -8px;
      border-radius: 50%;
    }
  `}
`;

const Login = styled.div`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #828282;
`;
