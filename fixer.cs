using System;
using System.Net.Http;
using System.Threading.Tasks;


        HttpClient client = new HttpClient();
        {
            try
            {
                // Replace this URL with the endpoint you want to call
                string API_KEY = "4a24ea8b1d544f251a84ddf1f0850b5b"; // Replace with your actual API key
                string apiUrl = $"http://data.fixer.io/api/latest?access_key={API_KEY}&base=EUR&symbols=USD";

                // Make a GET request
                HttpResponseMessage response = await client.GetAsync(apiUrl);

                // Check if the request was successful
                if (response.IsSuccessStatusCode)
                {
                    // Read the content as a string
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("Response:");
                    Console.WriteLine(responseBody);
                }
                else
                {
                    Console.WriteLine($"Failed with status code {response.StatusCode}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
  
