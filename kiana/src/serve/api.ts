import request from "./axios.ts";
export function setUser(params: any) {
  return request.post("/user/setuser", params);
}
export function getTranslateUser(params: any) {
  return request.post("/user/getTranslateUser", params);
}
export function saveWinUser(params: any) {
  return request.post("/user/saveWinUser", params);
}
export function saveAllWinUser(params: any) {
  return request.post("/user/saveAllWinUser", params);
}
export function selectWinUser(params: any) {
  return request.post("/user/selectWinUser", params);
}
export function selectPlayerUser(params: any) {
  return request.post("/user/selectPlayerUser", params);
}
export function vote(params: any) {
  return request.post("/user/vote", params);
}
export function getWinPlayerUser(params: any) {
  return request.get("/user/getWinPlayerUser", params);
}
