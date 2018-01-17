(use-module '{fdweb xhtml texttools domutils})

(define (inhead xmlbody)
  (span ((class "inhead")) (xmleval xmlbody)))

(define disambig-cues #{":" #("," (spaces))})

(define (dterm xmlnode)
  (let ((content (domutils/textify xmlnode)))
    (let* ((dbreak (textsearch disambig-cues content))
	   (dstart (and dbreak (textmatcher disambig-cues content dbreak))))
      (if dstart
	  (span ((class "dterm"))
	    (subseq content 0 dstart)
	    (span ((class "disambig")) (subseq content dstart)))
	  (span ((class "dterm")) content)))))

(define (word xmlbody)
  (span ((class "word")) "\&ldquo;" (xmleval xmlbody) "\&rdquo;"))

(define (clause xmlbody)
  (span ((class "clause")) (xmleval xmlbody)))

(define (var xmlbody)
  (span ((class "var")) (xmleval xmlbody)))

(define (sym xmlbody)
  (span ((class "sym")) (xmleval xmlbody)))

(define (unichar xmlnode)
  (let ((char (get xmlnode 'char)))
    (if (exists? char)
	(span ((class "unichar"))
	  "(\&ldquo;" char "&rdquo;, unicode 0x"
	  (number->string (char->integer (elt char 0)))
	  ")")
	(span ((class "unichar")) (xmleveal (xmlcontent xmlnode))))))

(define (term ref xmlbody)
  (anchor* ref ((class "termref")) (xmleval xmlbody)))

(module-export! '{inhead dterm word clause var sym unichar term})


