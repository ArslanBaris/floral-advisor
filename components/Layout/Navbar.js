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
        <div style={{minWidth:"130px"}}>
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
            size="60px"
            fw={900}
          >
            LOVU
          </Text>
        </div>

        <div style={{minWidth:"130px"}} className="navbar-menu">
          <Menu shadow="xl" width={150}>
            <Menu.Target>
              <Button
              style={{minWidth:"130px"}}
                variant="gradient"
                rightSection={<IconChevronsDown size={14} />}
                // leftSection={<IconLanguage size={14} />}
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                radius={20}
              >
                {selectedLanguage == "tr" ? 
                  <> <span className="fi fi-tr me-2"></span> <span>Türkçe</span></>   : 
                  <>     <span style={{marginRight:"12px", marginLeft:"3px"}}> 🌎 </span> <span>English</span></> 
                  }
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Languages</Menu.Label>
              <Menu.Item onClick={()=>{changeSelectedLanguage("tr")}} >
              <span className="fi fi-tr me-2"></span>  Türkçe
              </Menu.Item>
              <Menu.Item onClick={()=>{changeSelectedLanguage("en")}} >
              <span style={{marginRight:"12px", marginLeft:"3px"}}> 🌎 </span>  English
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </>
  );
}