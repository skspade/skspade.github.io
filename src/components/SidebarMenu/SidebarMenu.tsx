import * as React from "react";
import { GatsbyLinkProps } from "gatsby-link";
import { MenuProps, MenuItem } from "../Menu";
import { Menu, Icon, Sidebar } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react";
import {useContext} from "react";
import {Context} from "../../store";

interface SidebarMenuProps extends MenuProps {
  visible?: boolean;
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
}

export const SidebarMenu = ({
  items,
  pathname,
  Link,
}: SidebarMenuProps) => {
  const isActive = (item: MenuItem) =>
    item.exact ? pathname === item.path : pathname.startsWith(item.path);
  const activeItem =
    items.find((item: MenuItem) => isActive(item)) || ({} as MenuItem);
  const {state} = useContext(Context);

  console.log(state.isSidebarVisible);
  return (
    <Sidebar
      as={Menu}
      animation="slide along"
      width="thin"
      visible={state.isSidebarVisible}
      icon="labeled"
      vertical
      inverted={activeItem.inverted}
    >
      {items.map((item) => {
        const active = isActive(item);
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon as SemanticICONS} />
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};

export default SidebarMenu;
