
using Microsoft.EntityFrameworkCore;
using AppExemplo.Models;

namespace AppExemplo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :base(options)
        {

        }
        public DbSet<User> Users { get; set; }
    }
}
