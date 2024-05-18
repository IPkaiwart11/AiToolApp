

export const AuthFetch = async (url, options = {}) => {
   const token = localStorage.getItem('token');
   if (!token) {
      throw new Error('No token found');
   }

   const response = await fetch(url, {
      ...options,
      headers: {
         ...options.headers,
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json',
      },
   });

   if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
   }

   return response.json();
};

