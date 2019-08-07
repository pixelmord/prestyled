with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "prestyled";

  buildInputs = [

    pkgs.nodejs-10_x
  ];
}
