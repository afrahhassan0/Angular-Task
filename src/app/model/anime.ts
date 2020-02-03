export class Anime {
   public animeId: number;
   public rank:number;
   public title: string;
   public url: string;
   public image_url: string;
   public type: string;
   public episodes: number;
   public start_date: string;
   public end_date: string;
   public score:number;

   deserialize(input): this{
      return Object.assign( this , input );
   }
}
