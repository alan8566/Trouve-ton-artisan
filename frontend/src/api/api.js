const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export async function fetchArtisans() {
  const res = await fetch(`${BASE_URL}/artisans`);
  return res.json();
}

export async function fetchArtisanById(id) {
  const res = await fetch(`${BASE_URL}/artisans/${id}`);
  return res.json();
}

export async function searchArtisans(params) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/artisans/search?${query}`);
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
}

export async function fetchArtisansByCategory(id) {
  const res = await fetch(`${BASE_URL}/categories/${id}/artisans`);
  return res.json();
}