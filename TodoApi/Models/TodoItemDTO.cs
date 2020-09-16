using System;

namespace TodoApi.Models
{
    public class TodoItemDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime Due { get; set; }
        public string Assignee { get; set; }
        public bool IsComplete { get; set; }
    }
}