using System;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
        public string Assignee { get; set; }
        public DateTime Due { get; set; }
        public string Secret { get; set; }
    }
}
