export function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convert timestamp to base36
    const randomString = Math.random().toString(36).substring(2, 7); // Generate a random string
    return `${timestamp}-${randomString}`;
  }
