export function x16sCycle(hash: string) {
  let order = "0123456789abcdef".split("");

  let sixteen = hash.slice(48, 64);

  sixteen.split("").forEach(hex => {
    const index = parseInt(`0x${hex}`);
    const char = order.splice(index, 1)[0];
    order.unshift(char);
  });

  return order;
}

export function x16sAlgorithms(cycle: string[]) {
  return cycle.map(hex => {
    switch (hex.toLowerCase()) {
      case "0":
        return "Blake";
      case "1":
        return "Blue Midnight Wish";
      case "2":
        return "Grøstl";
      case "3":
        return "JH";
      case "4":
        return "Keccak";
      case "5":
        return "Skein";
      case "6":
        return "Luffa";
      case "7":
        return "Cubehash";
      case "8":
        return "Shavite";
      case "9":
        return "SIMD";
      case "a":
        return "Echo";
      case "b":
        return "Hamsi";
      case "c":
        return "Fugue";
      case "d":
        return "Shabal";
      case "e":
        return "Whirlpool";
      case "f":
        return "SHA-512";
      default:
        return "Unknown";
    }
  });
}

export function x16s(hash: string) {
  const cycle = x16sCycle(hash);
  const algorithms = x16sAlgorithms(cycle);

  return cycle.map((hex, i) => ({ hex, algorithm: algorithms[i] }));
}
