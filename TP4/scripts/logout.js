function logout() {
    console.log("logout");
    document.cookie = "UserID=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    document.cookie = "BuyTicket=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    window.location.replace(`/`)
}

