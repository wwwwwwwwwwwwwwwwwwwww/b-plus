class Message
{
  function this( text ) { this._text = text;  },
  function say()        { stdout.println( this.text );  }
  property text(v)      { get { return this._text; }
                           set { this._text = v; } }  
}
