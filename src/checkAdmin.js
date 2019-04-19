export default function checkAdmin() {
    return localStorage.getItem("isAdmin") == 'true' ? true : false;
}