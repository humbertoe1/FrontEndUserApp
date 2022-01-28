using System;
using System.Collections.Generic;
using AppExemplo.Models;
using AppExemplo.Data;

namespace AppExemplo.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _db;

        public UserRepository(ApplicationDbContext db)
        {
            this._db = db;
        }

        public void Create(User obj)
        {
            _db.Users.Add(obj);
            _db.SaveChanges();
        }

        public void Delete(User obj)
        {
            _db.Users.Remove(obj);
            _db.SaveChanges();
        }


        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetById(int id)
        {
            var user = _db.Users.Find(id);

            return user;
        }

        public void Save(User user)
        {
            _db.Users.Add(user);
            _db.SaveChanges();
        }

        public void Update(User obj)
        {
            _db.Users.Update(obj);
            _db.SaveChanges();
        }


        public IEnumerable<User> Listar()
        {
            IEnumerable<User> objList = _db.Users;

            return objList;
        }
    }
}
