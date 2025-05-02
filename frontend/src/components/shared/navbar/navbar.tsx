import {
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button, DropdownMenu, Flex, Link, Separator, TabNav } from "@radix-ui/themes";

import styles from "./navbar.module.css"
import { WebsiteLogo } from "./website-logo";

export function NavBar() {
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
                <Link href="/">INÍCIO</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/">SOBRE</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/">SERVIÇOS</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/">PLANOS</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/">CONTATO</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/">TRABALHE CONOSCO</Link>
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
