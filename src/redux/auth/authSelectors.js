export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUserName = state => state.user.user.name;
export const selectUserEmail = state => state.user.user.email;
export const selectIsRefreshing = state => state.user.isRefreshing;
