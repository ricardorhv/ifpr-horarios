//This function receive a string and replace all spaces for a "_"
export function createURL(obj: string) {
  return obj.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(' ', '_')
}

