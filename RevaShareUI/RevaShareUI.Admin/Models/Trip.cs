using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RevaShareUI.Admin.Models
{
    public class Trip
    {
        public int ID { get; set; }
        public string StartLocation { get; set; }
        public string EndLocation { get; set; }
        public string DepartureTime { get; set; }
        public Driver Driver { get; set; }
        public List<Rider> Riders { get; set; }
    }
}
