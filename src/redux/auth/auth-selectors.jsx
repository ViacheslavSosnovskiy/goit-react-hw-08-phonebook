const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurren = state => state.auth.user.isFetchingCurrenUser

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsFetchingCurren,
}

export default authSelectors;