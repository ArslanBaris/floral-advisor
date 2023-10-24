import React from "react";
import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconCornerRightDown,
  IconLanguage,
  IconChevronsDown,
  IconChevronsLeft,
} from '@tabler/icons-react';
import { useAppContext } from "@/Context/AppContext";

export default function Navbar(props) {

  const { activeIndex, setActiveIndex } = props
  const { selectedLanguage, changeSelectedLanguage } = useAppContext();

  return (
    <>
      <div className="navbar d-flex justify-content-between align-items-center">
        <div>
          {
            activeIndex != "Categories" &&
            <Button
              variant="gradient"
              // rightSection={<IconChevronsLeft size={14} />}
              leftSection={<IconChevronsLeft size={14} />}
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              radius={20}
              onClick={() => { setActiveIndex("Categories") }}
            >
              Back
            </Button>
          }
        </div>
        <div className="navbar-logo">
          <Text
            size="40px"
            fw={900}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          >
            LOVU
          </Text>
        </div>

        <div className="navbar-menu">
          <Menu shadow="xl" width={150}>
            <Menu.Target>
              <Button
                variant="gradient"
                rightSection={<IconChevronsDown size={14} />}
                // leftSection={<IconLanguage size={14} />}
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                radius={20}
              >
                {selectedLanguage.toLocaleUpperCase()}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Languages</Menu.Label>
              <Menu.Item leftSection={<IconLanguage style={{ width: rem(14), height: rem(14) }} />} onClick={()=>{changeSelectedLanguage("tr")}} >
                Türkçe
              </Menu.Item>
              <Menu.Item leftSection={<IconLanguage style={{ width: rem(14), height: rem(14) }} />} onClick={()=>{changeSelectedLanguage("en")}} >
                English
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </>
  );
}