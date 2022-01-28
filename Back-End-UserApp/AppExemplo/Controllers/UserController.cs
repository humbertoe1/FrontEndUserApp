using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using AppExemplo.Models;
using AppExemplo.Repository;

namespace AppExemplo.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        [HttpPost]
        [Route("userFinder")]
        public IActionResult GetById([FromBody] int id, [FromServices] IUserRepository userRepository)
        {
            object user = userRepository.GetById(id);
            if(user == null)
            {
                return NotFound("Usuario Não Encontrado");
            }
            return Ok("User Found");
        }
        [HttpPost]
        [Route("userCadastrar")]
        public IActionResult Create([FromBody]User obj, [FromServices] IUserRepository userRepository)
        {
            
            userRepository.Create(obj);
            return Ok("Usuario Cadastrado.");
        }
        [HttpPost]
        [Route("userDeletar")]
        public IActionResult Delete([FromBody] int userId, [FromServices] IUserRepository userRepository)
        {
            userRepository.Delete(userRepository.GetById(userId));
            return Ok("Usuario Deletado");
        }
        [HttpGet]
        [Route("userListar")]
        public IEnumerable<User> Listar([FromServices] IUserRepository userRepository)
        {
            IEnumerable<User> users = userRepository.Listar();
            return users;
        }

        [HttpPost]
        [Route("userAtualizar")]
        public IActionResult Update([FromBody] User obj, [FromServices] IUserRepository userRepository)
        { 
            userRepository.Update(obj);
            return Ok("User Atualizar");

        }


    }
}
/*
 * 
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IEnumerable<User>

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
*/