using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly ResumeDbContext _context;
    private readonly ILogger<ContactController> _logger;

    public ContactController(ResumeDbContext context, ILogger<ContactController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ContactMessageRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new { success = false, message = "Invalid form data. Please check your inputs." });
        }

        try
        {
            var message = new ContactMessage
            {
                Name = request.Name,
                Email = request.Email,
                Message = request.Message,
                Timestamp = DateTime.UtcNow
            };

            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Contact message received from {Name} ({Email})", message.Name, message.Email);

            return Ok(new { success = true, message = "Your message has been received. Thank you!" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error saving contact message");
            return StatusCode(500, new { success = false, message = "An error occurred. Please try again later." });
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetMessages()
    {
        var messages = await _context.ContactMessages
            .OrderByDescending(m => m.Timestamp)
            .Select(m => new
            {
                m.Id,
                m.Name,
                m.Email,
                m.Message,
                m.Timestamp
            })
            .ToListAsync();

        return Ok(messages);
    }
}

public class ContactMessageRequest
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}
