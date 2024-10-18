import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateWalletAddress(address: `0x${string}` | undefined) {
  return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
}

export function convertValue(amount: number, decimals: number) {
  return (amount / 10 ** decimals).toFixed(4);
}

export function felt252ToString(felt: string | bigint): string {
  let feltBigInt = BigInt(felt);
  let result = '';
  while (feltBigInt > 0) {
    result = String.fromCharCode(Number(feltBigInt & BigInt(0xFF))) + result;
    feltBigInt = BigInt(feltBigInt >> BigInt(8));
  }
  return result;
}