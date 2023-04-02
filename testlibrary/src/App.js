import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

export default function Layout() {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}