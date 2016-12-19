using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RevaShareUI.Admin.Models
{
    public class Driver
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string CarMake { get; set; }
        public string CarModel { get; set; }
        public string CarLicensePlate { get; set; }
        public string CarColor { get; set; }
        public int CarCapacity { get; set; }
    }
}
