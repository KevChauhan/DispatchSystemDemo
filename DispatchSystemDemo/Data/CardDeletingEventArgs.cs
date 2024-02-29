namespace DispatchSystemDemo.Data
{
    public class CardDeletingEventArgs: EventArgs
    {
        public CardDeletingEventArgs(Card card)
        {
            Card = card;
        }

        public Card Card { get; set; }
        public bool Cancel { get; set; } = false;
    }
}
