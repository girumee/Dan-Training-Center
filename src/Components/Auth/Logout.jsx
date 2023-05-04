export default function Logout() {
  localStorage.removeItem("adminLoginStatus", false);
  window.location.href = "/login";

  return <div></div>;
}
