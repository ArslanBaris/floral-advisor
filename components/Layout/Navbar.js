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
import { Container, Row, Col} from "reactstrap";

export default function Navbar(props) {

  const { activeIndex, setActiveIndex } = props
  const { selectedLanguage, changeSelectedLanguage } = useAppContext();

  return (
    <Container>
      <Row className="navbar d-flex justify-content-between align-items-center">
        <Col xs="3">
          {
            activeIndex != "Categories" &&
            <Button
              variant="gradient"
              size="xs"
              
              // rightSection={<IconChevronsLeft size={14} />}
              // leftSection={}
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              radius={20}
              style={{textAlign:"center", justifyContent:"center"}}
              onClick={() => { setActiveIndex("Categories") }}
            >
              <span><IconChevronsLeft size={14} /></span>
              <span className="button-text" style={{textAlign:"center"}} >
              Back
              </span>
            </Button>
          }
        </Col>
        <Col xs="6">
          <Text
           className="navbar-text"
            fw={900}
          >
            LOVU
          </Text>
        </Col>

        <Col xs="3" className="navbar-menu">
          <Menu shadow="xl" width={150}>
            <Menu.Target>
              <Button
              size="xs"
                variant="gradient"
                rightSection={<IconChevronsDown size={14} />}
                // leftSection={<IconLanguage size={14} />}
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                style={{fontSize:"10px !important"}}
                radius={20}
              >
                {selectedLanguage == "tr" ? 
                  <> <span className="fi fi-tr"></span> <span className="button-text">Türkçe</span></>   : 
                  <>     <span> 🌎 </span> <span className="button-text">English</span></> 
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
        </Col>

      </Row>
      </Container>
  );
}