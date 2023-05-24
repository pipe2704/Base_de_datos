import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { Layout, Menu, Checkbox, theme } from "antd";
import React from "react";
import "./Sidebar.css";

const { Sider } = Layout;

const Exportar = (props) => {
  const items = [
    {
      key: "tecnologias",
      icon: React.createElement(FaLaptopCode),
      label: "Tecnologías",
      children: [
        {
          key: "frontend",
          label: "Frontend",
          children: [
            {
              key: "html",
              label: (
                <Checkbox
                  type="checkbox"
                  name="HTML"
                  checked={props.tecnologias.HTML}
                  onChange={props.handleTecnologiasChange}
                >
                  HTML
                </Checkbox>
              ),
            },
            {
              key: "css",
              label: (
                <Checkbox
                  type="checkbox"
                  name="CSS"
                  checked={props.tecnologias.CSS}
                  onChange={props.handleTecnologiasChange}
                >
                  CSS
                </Checkbox>
              ),
            },
            {
              key: "javascript",
              label: (
                <Checkbox
                  type="checkbox"
                  name="JavaScript"
                  checked={props.tecnologias.JavaScript}
                  onChange={props.handleTecnologiasChange}
                >
                  JavaScript
                </Checkbox>
              ),
            },
            {
              key: "react-js",
              label: (
                <Checkbox
                  type="checkbox"
                  name="React JS"
                  checked={props.tecnologias["React JS"]}
                  onChange={props.handleTecnologiasChange}
                >
                  React JS
                </Checkbox>
              ),
            },
            {
              key: "angular",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Angular"
                  checked={props.tecnologias.Angular}
                  onChange={props.handleTecnologiasChange}
                >
                  Angular
                </Checkbox>
              ),
            },
            {
              key: "vue",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Vue"
                  checked={props.tecnologias.Vue}
                  onChange={props.handleTecnologiasChange}
                >
                  Vue
                </Checkbox>
              ),
            },
            {
              key: "fluter",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Fluter"
                  checked={props.tecnologias.Fluter}
                  onChange={props.handleTecnologiasChange}
                >
                  Fluter
                </Checkbox>
              ),
            },
            {
              key: "swift",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Swift"
                  checked={props.tecnologias.Swift}
                  onChange={props.handleTecnologiasChange}
                >
                  Swift
                </Checkbox>
              ),
            },
          ],
        },
        {
          key: "backend",
          label: "Backend",
          children: [
            {
              key: "eclipse",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Eclipse"
                  checked={props.tecnologias.Eclipse}
                  onChange={props.handleTecnologiasChange}
                >
                  Eclipse
                </Checkbox>
              ),
            },

            {
              key: "spring",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Spring"
                  checked={props.tecnologias.Spring}
                  onChange={props.handleTecnologiasChange}
                >
                  Spring (JAVA)
                </Checkbox>
              ),
            },
            {
              key: "java",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Java"
                  checked={props.tecnologias.Java}
                  onChange={props.handleTecnologiasChange}
                >
                  Java
                </Checkbox>
              ),
            },
            {
              key: "python",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Python"
                  checked={props.tecnologias.Python}
                  onChange={props.handleTecnologiasChange}
                >
                  Python
                </Checkbox>
              ),
            },
            {
              key: "c++",
              label: (
                <Checkbox
                  type="checkbox"
                  name="C ++"
                  checked={props.tecnologias["C ++"]}
                  onChange={props.handleTecnologiasChange}
                >
                  C ++
                </Checkbox>
              ),
            },
            {
              key: "ruby",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Ruby"
                  checked={props.tecnologias.Ruby}
                  onChange={props.handleTecnologiasChange}
                >
                  Ruby
                </Checkbox>
              ),
            },
            {
              key: "php",
              label: (
                <Checkbox
                  type="checkbox"
                  name="PHP"
                  checked={props.tecnologias.PHP}
                  onChange={props.handleTecnologiasChange}
                >
                  PHP
                </Checkbox>
              ),
            },
            {
              key: "node-js",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Node js"
                  checked={props.tecnologias["Node js"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Node js
                </Checkbox>
              ),
            },

            {
              key: "ibm-integration-bus",
              label: (
                <Checkbox
                  type="checkbox"
                  name="IBM Integration Bus"
                  checked={props.tecnologias["IBM Integration Bus"]}
                  onChange={props.handleTecnologiasChange}
                >
                  IBM Integration Bus
                </Checkbox>
              ),
            },
            {
              key: "glassfish",
              label: (
                <Checkbox
                  type="checkbox"
                  name="GlassFish"
                  checked={props.tecnologias.GlassFish}
                  onChange={props.handleTecnologiasChange}
                >
                  GlassFish
                </Checkbox>
              ),
            },
            {
              key: "intellij-idea",
              label: (
                <Checkbox
                  type="checkbox"
                  name="IntelliJ IDEA"
                  checked={props.tecnologias["IntelliJ IDEA"]}
                  onChange={props.handleTecnologiasChange}
                >
                  IntelliJ IDEA
                </Checkbox>
              ),
            },
            {
              key: "net-core",
              label: (
                <Checkbox
                  type="checkbox"
                  name=".NET CORE"
                  checked={props.tecnologias[".NET CORE"]}
                  onChange={props.handleTecnologiasChange}
                >
                  .NET CORE
                </Checkbox>
              ),
            },
            {
              key: "kotlin",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Kotlin"
                  checked={props.tecnologias.Kotlin}
                  onChange={props.handleTecnologiasChange}
                >
                  Kotlin
                </Checkbox>
              ),
            },
            {
              key: "laravel",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Laravel"
                  checked={props.tecnologias.Laravel}
                  onChange={props.handleTecnologiasChange}
                >
                  Laravel
                </Checkbox>
              ),
            },
          ],
        },
        {
          key: "mobile-y-otros",
          label: "Mobile y otros",
          children: [
            {
              key: "amazon-web-services",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Amazon Web Services"
                  checked={props.tecnologias["Amazon Web Services"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Amazon Web Services
                </Checkbox>
              ),
            },
            {
              key: "android",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Android"
                  checked={props.tecnologias.Android}
                  onChange={props.handleTecnologiasChange}
                >
                  Android
                </Checkbox>
              ),
            },

            {
              key: "postman",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Postman"
                  checked={props.tecnologias.Postman}
                  onChange={props.handleTecnologiasChange}
                >
                  Postman
                </Checkbox>
              ),
            },
            {
              key: "power-bi",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Power BI"
                  checked={props.tecnologias["Power BI"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Power BI
                </Checkbox>
              ),
            },
          ],
        }, //----
        {
          key: "base-de-datos",
          label: "Base de datos",
          children: [
            {
              key: "pl-sql-oracle",
              label: (
                <Checkbox
                  type="checkbox"
                  name="PL-SQL (Oracle)"
                  checked={props.tecnologias["PL-SQL (Oracle)"]}
                  onChange={props.handleTecnologiasChange}
                >
                  PL-SQL (Oracle)
                </Checkbox>
              ),
            },
            {
              key: "mongodb",
              label: (
                <Checkbox
                  type="checkbox"
                  name="MongoDB"
                  checked={props.tecnologias.MongoDB}
                  onChange={props.handleTecnologiasChange}
                >
                  MongoDB
                </Checkbox>
              ),
            },
            {
              key: "postgresql",
              label: (
                <Checkbox
                  type="checkbox"
                  name="PostgreSQL"
                  checked={props.tecnologias.PostgreSQL}
                  onChange={props.handleTecnologiasChange}
                >
                  PostgreSQL
                </Checkbox>
              ),
            },
            {
              key: "microsoft-sql-server",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Microsoft SQL Server"
                  checked={props.tecnologias["Microsoft SQL Server"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Microsoft SQL Server
                </Checkbox>
              ),
            },
            {
              key: "oracle-forms-oracle",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Oracle Forms (Oracle)"
                  checked={props.tecnologias["Oracle Forms (Oracle)"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Oracle Forms (Oracle)
                </Checkbox>
              ),
            },
            {
              key: "oracle-reports-oracle",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Oracle Reports (Oracle)"
                  checked={props.tecnologias["Oracle Reports (Oracle)"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Oracle Reports (Oracle)
                </Checkbox>
              ),
            },
            {
              key: "ibm-db2",
              label: (
                <Checkbox
                  type="checkbox"
                  name="IBM Db2"
                  checked={props.tecnologias["IBM Db2"]}
                  onChange={props.handleTecnologiasChange}
                >
                  IBM Db2
                </Checkbox>
              ),
            },
          ],
        },
        {
          key: "proyectos",
          label: "Proyectos",
          children: [
            {
              key: "trello",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Trello"
                  checked={props.tecnologias.Trello}
                  onChange={props.handleTecnologiasChange}
                >
                  Trello
                </Checkbox>
              ),
            },
            {
              key: "jira",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Jira"
                  checked={props.tecnologias.Jira}
                  onChange={props.handleTecnologiasChange}
                >
                  Jira
                </Checkbox>
              ),
            },
          ],
        },
        {
          key: "marcos-agiles",
          label: "Marcos Agiles",
          children: [
            {
              key: "scrum-developer",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Scrum Developer"
                  checked={props.tecnologias["Scrum Developer"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Scrum Developer
                </Checkbox>
              ),
            },
            {
              key: "scrum-master",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Scrum Master"
                  checked={props.tecnologias["Scrum Master"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Scrum Master
                </Checkbox>
              ),
            },
            {
              key: "product-owner",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Product Owner"
                  checked={props.tecnologias["Product Owner"]}
                  onChange={props.handleTecnologiasChange}
                >
                  Product Owner
                </Checkbox>
              ),
            },
            {
              key: "devops",
              label: (
                <Checkbox
                  type="checkbox"
                  name="DevOps"
                  checked={props.tecnologias.DevOps}
                  onChange={props.handleTecnologiasChange}
                >
                  DevOps
                </Checkbox>
              ),
            },
          ],
        },
        {
          key: "versionamiento",
          label: "Versionamiento",
          children: [
            {
              key: "git",
              label: (
                <Checkbox
                  type="checkbox"
                  name="Git"
                  checked={props.tecnologias.Git}
                  onChange={props.handleTecnologiasChange}
                >
                  Git
                </Checkbox>
              ),
            },
          ],
        },
      ],
    },
    {
      key: "niveles",
      icon: React.createElement(FaUserGraduate),
      label: "Niveles",
      children: [
        {
          key: "junior",
          label: (
            <Checkbox
              type="checkbox"
              name="Junior"
              checked={props.niveles.Junior}
              onChange={props.handleNivelesChange}
            >
              Junior
            </Checkbox>
          ),
        },
        {
          key: "medio",
          label: (
            <Checkbox
              type="checkbox"
              name="Medio"
              checked={props.niveles.Medio}
              onChange={props.handleNivelesChange}
            >
              Medio
            </Checkbox>
          ),
        },
        {
          key: "master",
          label: (
            <Checkbox
              type="checkbox"
              name="Master"
              checked={props.niveles.Master}
              onChange={props.handleNivelesChange}
            >
              Master
            </Checkbox>
          ),
        },
        {
          key: "senior",
          label: (
            <Checkbox
              type="checkbox"
              name="Senior"
              checked={props.niveles.Senior}
              onChange={props.handleNivelesChange}
            >
              Senior
            </Checkbox>
          ),
        },
      ],
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider
      style={{
        background: "#5C64AE",
        minHeight: "100vh",
        marginLeft: "-18px",
      }}
      width={260}
    >
      <h1 style={{ color: "#FFFFFF", fontSize: "30px" }}>OLSotfware</h1>
      <hr style={{ color: "#FFFFFF", fontSize: "16px" }} />
      <h2 style={{ color: "#FFFFFF", fontSize: "25px", marginTop: "10px" , marginLeft:"40px"}}>Filtros</h2>
      <Menu
        mode="inline"
        style={{
          height: "100%",
        }}
        items={items}
      >
        {items.map((item) => {
          if (item.children) {
            return (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((subItem) => {
                  if (subItem.children) {
                    return (
                      <Menu.SubMenu key={subItem.key} title={subItem.label}>
                        {subItem.children.map((child) => (
                          <Menu.Item key={child.key}>{child.label}</Menu.Item>
                        ))}
                      </Menu.SubMenu>
                    );
                  } else {
                    return (
                      <Menu.Item key={subItem.key} icon={subItem.icon}>
                        {subItem.label}
                      </Menu.Item>
                    );
                  }
                })}
              </Menu.SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sider>
  );
};

export default Exportar;
