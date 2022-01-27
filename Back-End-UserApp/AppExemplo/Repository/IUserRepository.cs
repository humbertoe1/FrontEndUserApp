using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppExemplo.Models;

namespace AppExemplo.Repository
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetById(int userId);
        void Create(User obj);
        void Update(User obj);
        void Delete(User obj);
        void Save(User user);
        IEnumerable<User> Listar();
    }
}
