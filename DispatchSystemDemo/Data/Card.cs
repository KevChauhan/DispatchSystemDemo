namespace DispatchSystemDemo.Data
{
    public class Card
    {
        public int CardId { get; set; }
        public string CardText { get; set; } = string.Empty;
        public CardStatus CardStatus { get; set; } = CardStatus.InCardsSection;
        public int? Row { get; set; }
        public int? Column { get; set; }
    }

    public enum CardStatus
    {
        InCardsSection,
        Added
    }
}
