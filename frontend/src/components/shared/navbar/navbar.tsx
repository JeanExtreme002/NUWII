import { Button, Flex, TabNav, DropdownMenu, Separator } from "@radix-ui/themes";
import {
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { WebsiteLogo } from "./website-logo";
import styles from "./navbar.module.css"

export interface NavBarProps {
}

export function NavBar(props: NavBarProps) {
  const {} = props;

  const getLoginButton = () => {
    return (
      <Button className={styles.loginButton} variant="surface">ÁREA DO CLIENTE</Button>
    )
  }

  return <>
    <Flex className={styles.root}>
      <div className={styles.mobileContainer}>
        <div className={styles.logo}>
          <WebsiteLogo/>
        </div>
        {getLoginButton()}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline" color="sky">
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenu.Trigger>
            <DropdownMenu.Content className={styles.dropDownMenu} sideOffset={5}>
              <DropdownMenu.Item>
                <a href="/">INÍCIO</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <a href="/">SOBRE</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <a href="/">SERVIÇOS</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <a href="/">PLANOS</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <a href="/">CONTATO</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <a href="/">TRABALHE CONOSCO</a>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div className={styles.desktopContainer}>
        <TabNav.Root className={styles.container}>
          <div className={styles.logo}>
            <WebsiteLogo/>
          </div>
          
          <TabNav.Link className={styles.tabNavLink} href="/">INÍCIO</TabNav.Link>
          <TabNav.Link className={styles.tabNavLink} href="/">SOBRE</TabNav.Link>
          <TabNav.Link className={styles.tabNavLink} href="/">SERVIÇOS</TabNav.Link>
          <TabNav.Link className={styles.tabNavLink} href="/">PLANOS</TabNav.Link>
          <TabNav.Link className={styles.tabNavLink} href="/">CONTATO</TabNav.Link>
          <TabNav.Link className={styles.tabNavLink} href="/">TRABALHE CONOSCO</TabNav.Link>
          <TabNav.Link href="/">{getLoginButton()}</TabNav.Link>
        </TabNav.Root>
      </div>
      <Separator size="4" orientation={"horizontal"}/>
    </Flex>
  </>
}
