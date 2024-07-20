using System.Security.Cryptography;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Churnkey Code to Generate Secure HMAC Hash
try
{
	string secret = "test_4yhYBA2C5kTMLYLX2Hn4j64xSKIExR1k"; // API Secret
	string message = "cus_QVBhnykr03RYfs"; // Customer ID

	using (var hmacsha256 = new HMACSHA256(Encoding.UTF8.GetBytes(secret)))
	{
		byte[] hash = hmacsha256.ComputeHash(Encoding.UTF8.GetBytes(message));
		StringBuilder result = new StringBuilder();
		foreach (byte b in hash)
		{
			result.Append(b.ToString("x2")); // Converts to hexadecimal
		}
		Console.WriteLine(result.ToString());
	}
}
catch (Exception e)
{
	Console.WriteLine("Error: " + e.Message);
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
