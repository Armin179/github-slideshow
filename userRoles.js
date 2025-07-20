const userRoles = ["guest", "user", "moderator", "admin", "guest", "user"];
const permissions = ["read", "write", "delete", "manage"];

// Function to find user role starting from a specific position
function findUserRole(role, startPosition = 0) {
  const index = userRoles.indexOf(role, startPosition);
  return index !== -1 ? index : "Role not found";
}

// Function to check permissions based on role hierarchy
function checkPermission(userRole, action) {
  const roleHierarchy = ["guest", "user", "moderator", "admin"];
  const actionHierarchy = ["read", "write", "delete", "manage"];

  const roleLevel = roleHierarchy.indexOf(userRole);
  const actionLevel = actionHierarchy.indexOf(action);

  if (roleLevel === -1 || actionLevel === -1) {
    return "Invalid role or action";
  }

  return roleLevel >= actionLevel ? "Permission granted" : "Permission denied";
}

// Find all occurrences of "user" role
let position = 0;
const userPositions = [];
while (position < userRoles.length) {
  const foundIndex = userRoles.indexOf("user", position);
  if (foundIndex === -1) break;
  userPositions.push(foundIndex);
  position = foundIndex + 1;
}

console.log("User role positions:", userPositions);
console.log(checkPermission("moderator", "write"));
console.log(checkPermission("guest", "delete"));